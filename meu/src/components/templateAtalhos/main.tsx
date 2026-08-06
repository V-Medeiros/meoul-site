import { Atalho } from "../atalho/main";

export function TemplateAtalhos() {
  return (
    <>
      <Atalho nome="atalho 1" top={140} left={200} width={480} height={320} />
      <Atalho nome="atalho 2" top={600} left={1600} width={360} height={480} />
      <Atalho nome="atalho 3" top={150} left={1500} width={600} height={400} />
      <Atalho nome="atalho 4" top={500} left={890} width={420} height={280} />
      <Atalho nome="atalho 5" top={70} left={700} width={640} height={440} />
    </>
  );
}
