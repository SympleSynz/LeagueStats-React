var SummonerListItem = React.createClass({

    render: function() {
        
        var matches = this.props.match
        var string = []
        for (var i = 0; i < matches.participants.length; i++)
        {
            string.push(matches.participants[i].summonerName)
        }
        return (
            <div className="matches">
                <table className="u-full-width">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Participants</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr>
                                <td> {matches.gameMode} </td>
                                <td> {matches.gameId} </td>
                                <td> <a href="#" onClick={this.handleClick}>{string[0]}</a>, <a href="#" onClick={this.handleClick}>{string[1]}</a>, <a href="#" onClick={this.handleClick}>{string[2]}</a>, <a href="#" onClick={this.handleClick}>{string[3]}</a>, <a href="#" onClick={this.handleClick}>{string[4]}</a>, <a href="#" onClick={this.handleClick}>{string[5]}</a>, <a href="#" onClick={this.handleClick}>{string[6]}</a>, <a href="#" onClick={this.handleClick}>{string[7]}</a>, <a href="#" onClick={this.handleClick}>{string[8]}</a>, <a href="#" onClick={this.handleClick}>{string[9]}</a>,</td>
                            </tr>
                    </tbody>
                </table>
            </div>
        )
    }
})
