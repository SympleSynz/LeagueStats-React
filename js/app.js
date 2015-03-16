$( "#champions" ).on( "click", function( event ) {
    React.render(
        <ChampList url="https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=spells&api_key=46e63522-f92b-42cf-88e7-2d248cd86bcf"/>,
        document.getElementById('content')
    )
})

$( "#summoners" ).on( "click", function( event ) {
    React.render(
        <SummonersList url="https://na.api.pvp.net/observer-mode/rest/featured?api_key=46e63522-f92b-42cf-88e7-2d248cd86bcf"/>,
        document.getElementById('content')
    )
})

