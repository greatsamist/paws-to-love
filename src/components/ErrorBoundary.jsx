import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // typically you would log this to something like TrackJS or NewRelic
    console.error("Error boundary component caught an error: ", error, info);
  }

  render() {
    if (this.state.hasError) {
      // return this.props.errorComponent;
      return (
        <h2>
          there was an error with this listing.
          <Link to="/">Click here to go back to the home page</Link>
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
