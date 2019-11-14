import Icon24Back from '@vkontakte/icons/dist/24/back'
import Icon24Done from '@vkontakte/icons/dist/24/done'
import { HeaderButton, Panel, PanelHeader } from '@vkontakte/vkui'
import PropTypes from 'prop-types'
import React from 'react'

const FilterSettings = props => (
  <Panel id={props.id}>
    <PanelHeader
      left={<HeaderButton onClick={props.go} data-to="activitystrip">
        {<Icon24Back/>}
      </HeaderButton>}
      right={<HeaderButton onClick={props.go} data-to="activitystrip">
        {<Icon24Done/>}
      </HeaderButton>}
    >
      Каталог Занятий
    </PanelHeader>
  </Panel>
)

FilterSettings.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string
    })
  })
}

export default FilterSettings
