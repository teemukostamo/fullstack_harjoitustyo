import React from 'react';
import { Table } from 'semantic-ui-react';
import AlbumsByArtistItem from './AlbumsByArtistItem';

const AlbumsByArtist = props => {
  console.log('albumbyartist props', props);
  if (props.albumList === null) {
    return <span>loading</span>;
  }
  return (
    <React.Fragment>
      <h4>Albumit</h4>
      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.Cell>ID#</Table.Cell>
            <Table.Cell>Nimi</Table.Cell>
            <Table.Cell>Levykoodi</Table.Cell>
            <Table.Cell>Biisejä</Table.Cell>
            <Table.Cell>Raportit</Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {props.albumList.map(album => (
            <AlbumsByArtistItem key={album.album_id} album={album} />
          ))}
        </Table.Body>
      </Table>
    </React.Fragment>
  );
};

export default AlbumsByArtist;