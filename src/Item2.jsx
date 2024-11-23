function Item2(users, senha) {


    return (
        <tr key={users}>



            <td>{users}</td>
            <td><input type="text" value={senha} /></td>



        </tr>

    )
}

export default Item2