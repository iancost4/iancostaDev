import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="My Technical Skills."
      intro="Explore the tools, technologies, and methodologies that shape my professional expertise. From backend development to project management, this page highlights the core skills I've honed throughout my career."
    >
      <div className="space-y-20">
        <ToolsSection title="Backend Skills">
          <Tool title="SQL">
            Expertise in managing relational databases, creating queries, and optimizing data retrieval.
          </Tool>
          <Tool title="NoSQL">
            Proficient with document-oriented databases like MongoDB, ideal for unstructured data storage.
          </Tool>
          <Tool title="Node.js">
            Backend JavaScript runtime environment for scalable server-side applications.
          </Tool>
          <Tool title="NestJS">
            A framework built on Node.js, enhancing application architecture with a modular approach.
          </Tool>
          <Tool title="ExpressJS">
            Lightweight web framework for building robust APIs and web applications.
          </Tool>
          <Tool title="TypeScript">
            Strongly-typed superset of JavaScript, ensuring code reliability and maintainability.
          </Tool>
          <Tool title="PHP">
            Versatile scripting language for server-side web development and backend applications.
          </Tool>
          <Tool title="Laravel">
            Elegant PHP framework for building secure and scalable web applications.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Frontend Tools">
          <Tool title="React">
            Skilled in building interactive and dynamic user interfaces for web applications.
          </Tool>
          <Tool title="Next.js">
            Full-stack React framework for server-side rendering and static site generation.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Cloud & Messaging">
          <Tool title="AWS">
            Experience in leveraging cloud services for hosting, storage, and scalability solutions.
          </Tool>
          <Tool title="RabbitMQ">
            Proficient in using message brokers for asynchronous communication between services.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Testing & Quality Assurance">
          <Tool title="Unit Tests">
            Expertise in writing automated tests to ensure code quality and reliability.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Project Management">
          <Tool title="Kanban">
            Experienced in managing workflows with a focus on continuous delivery and improvement.
          </Tool>
          <Tool title="Scrum">
            Skilled in Agile practices for iterative development and collaborative team environments.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
