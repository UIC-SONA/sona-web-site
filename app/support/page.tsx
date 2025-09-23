import {Header} from "@/components/header"
import {Footer} from "@/components/footer"
import {SupportHero} from "@/components/support-hero"
import {SupportForm} from "@/components/support-form"
import {Faq} from "@/components/faq"

export default function SoportePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header navigation={[]}/>
      <main>
        <SupportHero/>
        <SupportForm/>
        <Faq/>
      </main>
      <Footer/>
    </div>
  )
}
