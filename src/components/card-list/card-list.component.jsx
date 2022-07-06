import Card from "../card/card.component";

//class CardList extends Component {
const CardList = (props) => {
    const {monsters} = props;

    return (
        <div className="kity-posts-outer">
            {
                monsters.map( monster => (
                    <Card monster={monster} />
                ))
            }
        </div>
    )
}

export default CardList;