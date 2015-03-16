var ChampList = React.createClass({displayName: 'ChampList',

    getInitialState: function() {
        return {data: []};
    },
  
    componentDidMount: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data) {
                var champs = []
                for (var key in data.data)
                {
                    champs.push(data.data[key])
                }
                this.setState({
                    data: champs
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    handleListItemClicked: function(champ_id) {
        var chmp = _.find(this.state.data, {id: champ_id})
        this.refs.championView.setState({chmp: chmp})
    },

    render: function() {

        var self = this
        var champions = this.state.data.map(function (champion) {
        
          return (    
            <ChampionListItem champion={champion} onListItemClicked={self.handleListItemClicked}/>
            )
        })        

        return (
            <div className="champPage">
                <div className="ChampList six columns">
                    {champions}
                </div>
                <div className="championView six columns">
                    <ChampionView ref="championView"/>
                </div>
            </div>
        )
    }
})
