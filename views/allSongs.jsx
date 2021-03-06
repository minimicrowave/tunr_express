var React = require("react");

class AllSongs extends React.Component {
  render() {

    let eachSong = this.props.songs.map(song => {
      return (<a href={"/song/" + song.id}><h5>{song.title}</h5></a>);
    })

    return (
      <html>
        <head />
        <body>
          <h1>All Songs!</h1>
          <h3>
            <a href="/song/new">Add new songs</a>
          </h3>
          
          {eachSong}
        </body>
      </html>
    );
  }
}

module.exports = AllSongs;
