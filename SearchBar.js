import React from 'react';

export default function SearchBar()

const searchFeature = () => {
    fetch(API_ENDPOINT)
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      })
  }

const searchFilterFunction = (text) => {
    //check if searched text is not blank
    if(text) {
      //inserted text is not blank
      //fill the masterDataSource
      //update filteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUppserCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      //inserted text is blank
      //update filteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

const ItemView = ({item}) => {
    return (
      //flat list item
      <Text
        style={styles.itemStyle}
        onPress={() => getItem(item)}>
          {item.id}
          {'.'}
          {item.title.toUpperCase()}
      </Text>
    );
  };

const ItemSeparatorView = () => {
    return (
      //flat list item separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };