import { Component, type ReactNode } from 'react'

type Props = { children: ReactNode }

type State = { hasError: boolean }

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: unknown) {
    console.error('Unhandled render error:', error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="mx-auto max-w-lg px-6 py-24 text-center">
          <h1 className="font-serif text-3xl leading-tight text-[rgb(var(--azul-safira))]">
            Something went wrong.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--azul-safira))] opacity-75">
            Please refresh the page. If the issue continues, write to us at{' '}
            <a
              className="underline underline-offset-4"
              href="mailto:hello@maisonyasmini.com"
            >
              hello@maisonyasmini.com
            </a>
            .
          </p>
        </div>
      )
    }

    return this.props.children
  }
}
