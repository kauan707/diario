function Item({ nome, nota }) {

    return (

        <tr key={nome}>



            <td>{nome}</td>

            <td><input type="text" value={nota} /></td>



        </tr>

    )
}
export default Item;