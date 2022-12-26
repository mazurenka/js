export const usersObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya',
}

type UsersType = {
    [key: string]: { id: number, name: string }
}

const users: UsersType = {
    '0': {id: 101, name: 'Dimych'},
    '1': {id: 3232312, name: 'Dimych'},
    '2': {id: 1212, name: 'Dimych'},
    '3': {id: 1, name: 'Dimych'},
}
//users[1].id
var user = {id: 100500, name: 'Igor'}
users[user.id.toString()] = user
delete users[user.id]
users[user.id].name = 'Victor'

export const usersArray = [
    {id: 101, name: 'Dimych'},
    {id: 3232312, name: 'Dimych'},
    {id: 1212, name: 'Dimych'},
    {id: 1, name: 'Dimych'},
]

//usersArray.find(u => u.id === 1)
//usersArray.push(user)
//var userCopy = [...usersArray, user]
//var usersArray = usersArray.filter(u => u.id !== user.id)