import { CounterApp } from './counter-app/CounterApp'
import { GifExpertApp } from './gift-expert-app/GifExpertApp'

export const ProjectsApp = () => {
  return (
    <>
      <h1>Mini proyectos del curso</h1>
      <section>
        <h2 className="subtitle">Counter App</h2>
        <CounterApp value={1} />
      </section>
      <section>
        <h2 className="subtitle">Gift Expert App</h2>
        <GifExpertApp />
      </section>
      
    </>
  )
}
