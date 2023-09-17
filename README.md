# namaste-react

# Parcel

- Dev Build
- Creates Local Server
- HMR = Hot Module Replacement
- File Watching ==> Written in C++
- Caching for faster build
- Image Optimization
- Minifies files
- Bundles files
- Compress files
- Consistent Hashing
- Code Splitting
- Differential Bundling
- Diagnostic ==> Give hints to resolve errors
- Tree Shaking ==> Remove unused codes
- Different production and development builds

# React Hooks

(Normal javascript utility functions)

- **useState()** : It is a superpowerful state variable for react state variable
- **useEffect()** : It is a powerful hook that rerenders react components based on the dependency array.

# Class based component

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      // contains all state variables
      numberOfProjects: 1,
    };
  }

  render() {
    const { name, location } = this.props;
    const { numberOfProjects } = this.state;
    return (
      <div>
        <h1>Hello, my name is{name}</h1>
        <p>I live in {location}</p>
        <p>
          I have {numberOfProjects} projects
          <button
            onClick={() =>
              this.setState({
                numberOfProjects: this.state.numberOfProjects + 1,
              })
            }
          >
            Increase project count
          </button>
        </p>
      </div>
    );
  }
}
```
