import Icon28Favorite from '@vkontakte/icons/dist/28/favorite'
import Icon28Newsfeed from '@vkontakte/icons/dist/28/newsfeed'
import { Epic, Tabbar, TabbarItem, View } from '@vkontakte/vkui'
import connect from '@vkontakte/vkui-connect'
import '@vkontakte/vkui/dist/vkui.css'
import React from 'react'
import getJson from './NeededFunctions'
import getJsonById from './crutch'
import ActivityDetails from './panels/ActivityDetails'
import ActivityDetailsFav from './panels/ActivityDetailsFav'
import ActivityInfo from './panels/ActivityInfo'
import ActivityInfoFav from './panels/ActivityInfoFav'

import ActivityStrip from './panels/ActivityStrip'

import CityChoose from './panels/CityChoose'
import Favorites from './panels/Favorites'
import FilterSettings from './panels/FilterSettings'

const cities = []

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      activePanelUser: 'activitystrip',
      activePanelInit: 'citychoose',
      activePanelUserFav: 'favorites',
      activeStory: 'user',
      fetchedUser: null,
      currentCity: null,
      searchbar: '',
      currentId: 23,

    }
    this.onStoryChange = this.onStoryChange.bind(this)
    this.goUserCrutch = this.goUserCrutch.bind(this)
  }

  onStoryChange (e) {
    this.setState({activeStory: e.currentTarget.dataset.story})
  }

  onChange (searchbar) { this.setState({searchbar}) }

//	var onChange = onChangev.bind(this);

  getCities () {
    const search = this.state.searchbar.toLowerCase()
    return cities.filter(({title}) => title.toLowerCase().indexOf(search) > -1)
  }

  componentDidMount () {
    connect.subscribe((e) => {
      switch (e.detail.type) {
        case 'VKWebAppGetUserInfoResult':
          this.setState({fetchedUser: e.detail.data})
          break
        default:
      }
    })
    connect.send('VKWebAppGetUserInfo', {})
  }
  changeId = (e) => {
    this.setState({currentId: e.currentTarget.dataset.to})
  }


  goUserCrutch = (e) => {
    this.setState({currentId: e.currentTarget.dataset.to})
    this.setState({activePanelUser: 'activityinfo'})
    console.log(getJsonById(this.state.currentId));
  }
  goUser = (e) => {
    this.setState({activePanelUser: e.currentTarget.dataset.to})
  }
  goUserFav = (e) => {
    this.setState({activePanelUserFav: e.currentTarget.dataset.to})
  }
  goInit = (e) => {
    this.setState({activePanelInit: e.currentTarget.dataset.to})
  }


  render () {
    return (

      <Epic activeStory={this.state.activeStory} tabbar={
        <Tabbar shadow="false">
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'user'}
            data-story="user"
          ><Icon28Newsfeed/></TabbarItem>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'favorites'}
            data-story="favorites"
          ><Icon28Favorite/></TabbarItem>
        </Tabbar>
      }>
        <View id="user" activePanel={this.state.activePanelUser}>

          <ActivityStrip id="activitystrip" fetchedUser={this.state.fetchedUser}
                         go={this.goUserCrutch}
                         changeId={this.changeId}
                         activityjson={getJson()}/>

          <FilterSettings id="filtersettings"
                          fetchedUser={this.state.fetchedUser}
                          go={this.goUser}/>

          <ActivityInfo id="activityinfo"
                        fetchedUser={this.state.fetchedUser}
                        go={this.goUser}
                        activityjson={getJsonById(this.state.currentId)}
                        setStory={this.activeStory}/>
          <ActivityDetails id="activitydetails"
            activityjson={getJsonById(this.state.currentId)}
                           fetchedUser={this.state.fetchedUser}
                           go={this.goUser}/>


        </View>
        <View id="favorites" activePanel={this.state.activePanelUserFav}>
          <Favorites id="favorites"
                     fetchedUser={this.state.fetchedUser}
                     go={this.goUserFav}
          />
          <ActivityInfoFav id="activityinfofav"
                           fetchedUser={this.state.fetchedUser}
                           go={this.goUserFav}
                           setStory={this.activeStory}/>
          <ActivityDetailsFav id="activitydetailsfav"
                              fetchedUser={this.state.fetchedUser}
                              go={this.goUserFav}/>
        </View>


        <View id="init" activePanel={this.state.activePanelInit}>
          <CityChoose id="citychoose" fetchedUser={this.state.fetchedUser}
                      search={this.state.searchbar}
                      cities={this.getCities.bind(this)}
                      onChange={this.onChange.bind(this)} go={this.goInit}/>
        </View>

      </Epic>

    )
  }
}

export default App
