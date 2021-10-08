import React from "react";
import css from "./styles.module.css"

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div className={css.messageError}>Что-то пошло не так, но мы уже исправляем.</div>;
    }
    return <div>{this.props.children}</div>;
  }
}
