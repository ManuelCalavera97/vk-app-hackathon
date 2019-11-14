import Icon24Back from '@vkontakte/icons/dist/24/back'
import { Div, Group, HeaderButton, Panel, PanelHeader } from '@vkontakte/vkui'
import PropTypes from 'prop-types'
import React from 'react'

const ActivityDetailsFav = props => (
  <Panel id={props.id}>

    <PanelHeader
      left={<HeaderButton onClick={props.go} data-to="activityinfofav">
        {<Icon24Back/>}
      </HeaderButton>}
    >
      Каталог Занятий
    </PanelHeader>
    <Group>
      <Div style={{paddingTop: 10, paddingBottom: 10, color: 'gray'}}>
        Спортивно-оздоровительный центр. Первый фитнес клуб в Нижневартовске. На
        рынке больше 25 лет! К Вашим услугам тренажерный зал, зал аэробики,
        сауны, солярий. Инструкторы клуба проходили обучение в Федерации
        Аэробики России, имеют большой опыт работы в сфере фитнеса, каждый год
        повышают квалификацию.
        <br/>
        <br/>
        В нашем клубе приемлемые цены, ИНДИВИДУАЛЬНЫЙ ПОДХОД К КАЖДОМУ КЛИЕНТУ,
        предусмотрена система скидок для постоянных клиентов, студентов и
        школьников, хорошие условия для тренировок.
        <br/>
        <br/>Мы делаем всё, что бы занятия фитнесом приносили Вам радость и были
        доступны для всех!
      </Div>
    </Group>
    <Div style={{paddingTop: 30, paddingBottom: 30, color: 'gray'}}/>
  </Panel>
)

ActivityDetailsFav.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  setStory: PropTypes.string,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string
    })
  })
}

export default ActivityDetailsFav
