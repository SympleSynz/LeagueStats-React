var ChampionView = React.createClass({

    getInitialState: function() {
        return {chmp: null}
    },

    render: function() {

        if (this.state.chmp){
            var string = ''
            for (var i = 0; i < this.state.chmp.spells.length; i++)
            {
                string = string + this.state.chmp.spells[i].name + ', '
            }
            return (
                <div className="championView" >
                    <h2 className="championName">
                        {this.state.chmp.name}
                    </h2>
                    <h3 className="championTitle">
                        {this.state.chmp.title}
                    </h3>
                    <h3 className="champSkills">
                        Skills:
                    </h3>
                    <p> {string} </p>
                </div>
            )

        }else{

            return (
                <h2>Click an item to see details</h2>
            )
        }
  }

})
