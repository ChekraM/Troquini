class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const value = e.target[e.target.type === "checkbox" ? "checked" : "value"];
    const name = e.target.name;
    let filterObj = {};
    filterObj[name] = value;
    this.props.onFilter(filterObj);
  }
  render() {
    return (
      <NavbarNav className="center">
        <NavItem id="search">
          <div className="searc-container">
            <div className="search">
              <FontAwesomeIcon className="search-icon" icon="search" />
              <input
                id="search_input"
                className="search_input"
                type="search"
                placeholder="Que cherchez-vous ?"
                autoComplete="on"
                value={this.props.filterText}
                name="filterText"
                onChange={this.handleChange}
              />
            </div>
          </div>
        </NavItem>
      </NavbarNav>
    );
  }
}

<NavbarNav className="center">
  <NavItem id="search">
    <div className="searc-container">
      <div className="search">
        <FontAwesomeIcon className="search-icon" icon="search" />
        <input
          id="search_input"
          className="search_input"
          type="search"
          placeholder="Que cherchez-vous ?"
          autoComplete="on"
        />
      </div>
    </div>
  </NavItem>
</NavbarNav>;
