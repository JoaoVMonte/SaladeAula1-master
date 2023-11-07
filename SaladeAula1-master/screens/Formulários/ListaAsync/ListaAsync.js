import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Button, Card, IconButton, Text, TextInput } from 'react-native-paper';

export default function ListaAsyncStorage() {

    const [Items, setItems] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [editando, setEditando] = useState(false)
    const [ItemSendoEditado, setItemSendoEditado] = useState(null)


    useEffect(() => {
        loadItems()
    },[])


    async function loadItems() {
        const response =  await AsyncStorage.getItem('Items')
        console.log("🚀 ~ file: ListaItems.js:21 ~ loadItems ~ response:", response)
        const ItemsStorage = response ? JSON.parse(response) : []
        setItems(ItemsStorage)
    }


    async function adicionarItem() {
        console.log('ADICIONAR Item')
        let novaListaItems = Items
        novaListaItems.push(inputValue)
        await AsyncStorage.setItem('Items', JSON.stringify(novaListaItems));
        setItems(novaListaItems)
        setItemSendoEditado(null)
        setInputValue('')
    }

    async function editarItem() {
        console.log('EDITAR Item')
        console.log('ItemSendoEditado: ', ItemSendoEditado)
        console.log('ItemASerEditado inputValue: ', inputValue)

        let index = Items.indexOf(ItemSendoEditado)
        let novaListaItems = Items

        novaListaItems.splice(index, 1, inputValue)

        await AsyncStorage.setItem('Items', JSON.stringify(novaListaItems));
        setItems(novaListaItems)
        setEditando(false)
        setInputValue('')
    }

    async function excluirItem(Item) {
        let novaListaItems = Items.filter(item => item !== Item)
        await AsyncStorage.setItem('Items', JSON.stringify(novaListaItems));
        setItems(novaListaItems)
    }

    function handleEditarItem(Item) {
        setItemSendoEditado(Item)
        setInputValue(Item)
        setEditando(true)
    }

    function handleButton() {
        console.log('HANDLE BUTTON -> editando: ', editando)
        if (editando) {
            editarItem()
        } else {
            adicionarItem()
        }
    }

    return (
        <View style={styles.container}>

      <Text variant='titleLarge' style={styles.title} >Sua Lista</Text>

            <View style={styles.inputContainer}>

                <TextInput
                    style={{ flex: 4 }}
                    mode='outlined'
                    label='Item'
                    value={inputValue}
                    onChangeText={(text) => setInputValue(text)}
                />


                <Button
                    style={styles.button}
                    mode='contained'
                    onPress={handleButton}
                >
                    {editando ? 'Edit' : 'ADD Item'}
                </Button>

            </View>



            <FlatList
                style={styles.list}
                data={Items}
                renderItem={({ item }) => (
                    <Card
                        style={styles.card}
                        mode='outlined'
                    >
                        <Card.Content style={styles.cardContent}>
                            <Text variant='titleMedium' style={{ flex: 1 }}>{item}</Text>
                            <IconButton icon='pen' onPress={() => {
                                handleEditarItem(item)
                            }} />
                            <IconButton icon='trash-can-outline' onPress={() => {
                                excluirItem(item)
                            }} />
                        </Card.Content>
                    </Card>
                )}

            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainer: {
        flexDirection: 'row',
        width: '95%',
        paddingTop: 20,
        gap: 10
    },
    button: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        width: '95%',
        marginTop: 15
    },
    card: {
        margin: 3
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        margin: 10
      },
})