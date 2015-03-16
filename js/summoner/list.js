var SummonersList = React.createClass({displayName: 'SummonersList',

    getInitialState: function() {
        return {data: []};
    },

    componentDidMount: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data) {
                this.setState({
                    data: data.gameList
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },


    render: function() {

        var self = this

        var matches = this.state.data.map(function(match) {
            return (
                <SummonerListItem match={match} onListItemClicked={self.handleListItemClicked}/>
                )
        })

        return (
            <div className="summonerPage">
                <div className="summonerList twelve columns">
                    {matches}
                </div>
            </div>
        )
    }
})
