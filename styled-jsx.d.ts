declare module 'styled-jsx/css' {
  export default function css(strings: TemplateStringsArray, ...interpolations: any[]): string
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'style': React.DetailedHTMLProps<
        React.StyleHTMLAttributes<HTMLStyleElement> & {
          jsx?: boolean
          global?: boolean
        },
        HTMLStyleElement
      >
    }
  }
} 