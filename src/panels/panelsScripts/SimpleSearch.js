const cities = [
  {
    id: 1,
    title: 'Москва',
    important: 1
  }, {
    id: 2,
    title: 'Санкт-Петербург',
    important: 1
  }, {
    id: 1057624,
    title: 'Автопарка'
  }, {
    id: 1094057,
    title: 'Александровка'
  }, {
    id: 1112583,
    title: 'Военный'
  }
]

class SimpleSearch extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      search: ''
    }
    this.onChange = this.onChange.bind(this)
  }

  get cities () {
    const search = this.state.search.toLowerCase()
    return cities.filter(({name}) => name.toLowerCase().indexOf(search) > -1)
  }

  onChange (search) { this.setState({search}) }
}

export default SimpleSearch
