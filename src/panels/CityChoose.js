import { Cell, List, Panel, PanelHeader, Search } from '@vkontakte/vkui'
import PropTypes from 'prop-types'
import React from 'react'

const CityChoose = props => (
  <Panel id={props.id}>
    <PanelHeader noShadow>
      Выбор города
    </PanelHeader>
    <Search value={props.search} onChange={props.onChange}/>
    {props.cities.length > 0 &&
    <List>
      {props.cities.map(city => <Cell key={city.id}>{city.title}</Cell>)}
    </List>
    }
  </Panel>
)

CityChoose.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string
    })
  }),
  search: PropTypes.string.isRequired,
  cities: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired

}

export default CityChoose
