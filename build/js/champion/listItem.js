var ChampionListItem = React.createClass({


    handleClick: function(event) {
        console.log('an item is clicked', this.props.champion)
        this.props.onListItemClicked(this.props.champion.id)
    },

    render: function() {

        var champion = this.props.champion

        return ( 
            <div className="champion" >
                <table className="u-full-width">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Title</th>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href="#" onClick={this.handleClick}>{champion.name}</a></td>
                            <td> {champion.title} </td>
                            <td> {champion.id} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
  }
})
