const callback = () => alert('Yo!')

window.setTimeout(callback, 3000)

export let User = () => {

    let deleteUser = () => {
        alert("User should be deleted")
    }
    let saveUser = () => {
        alert("User should be saved")
    }

    return <div> Andrey
        <button onClick={deleteUser}>delete</button>
        <button onClick={saveUser}>save</button>
    </div>
}