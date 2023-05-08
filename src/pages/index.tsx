
import Head from 'next/head';
import {useState} from "react";


export default function Home() {
  return (
    <div>
      <Head>
        <title>300 Receitas Incríveis+ Bônus</title>
        <meta name="description" content="300 Receitas Incríveis+ 2 Bônus Exclusivos"></meta>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className=" bg-zinc-800 px-10 md:px-20 lg:px-40 ">
      <div className="bg-zinc-900 px-6 py-4 text-center flex items-center flex-col sm:flex-row sm:justify-center">
        <h2 className="text-white text-xs sm:text-sm">Você aprende e doa! <span className="font-bold">3% de cada venda</span> 
        será doado para a <a href="https://cufa.org.br/" target="_blank" rel="noreferrer" className="underline">CUFA (Central Única das Favelas)</a>
         através do <a className="underline" target="_blank" rel="noreferrer" href="https://esg.hotmart.co/HotmartOne">Hotmart One</a>
        </h2>
      </div>
           
      <section>   
        <div id="faq" className="bg-zinc-800" ><div id="faq" className="bg-zinc-800" >
            <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
            
              <h2 className='mt-00 font-display text-5xl font-bold tracking-tight text-zinc-100'>O que você vai aprender:
              </h2>
              <br />
              
              <h2 className="inline-flex items-center rounded-full py-1 px-4 text-orange-600 ring-1 ring-inset ring-orange-600" id="comprar-titulo">
              <span className="font-mono text-sm" aria-hidden="true">→</span>
              <span className="ml-3 h-3.5 w-px bg-orange-600/20"></span>
              <span className="ml-3 text-base font-medium tracking-tight">300 Receitas Incríveis</span>
              </h2>
              <br />
            
            <h2 className="mt-2 inline-flex items-center rounded-full py-1 px-4 text-orange-600 ring-1 ring-inset ring-orange-600" id="comprar-titulo">
              <span className="font-mono text-sm" aria-hidden="true">01</span>
              <span className="ml-3 h-3.5 w-px bg-orange-600/20"></span>
              <span className="ml-3 text-base font-medium tracking-tight">Pratos Salgados</span>
            </h2>
            <br />

            <h2 className="mt-2 inline-flex items-center rounded-full py-1 px-4 text-orange-600 ring-1 ring-inset ring-orange-600" id="comprar-titulo">
              <span className="font-mono text-sm" aria-hidden="true">02</span>
              <span className="ml-3 h-3.5 w-px bg-orange-600/20"></span>
              <span className="ml-3 text-base font-medium tracking-tight">Doces Irresistíveis</span>
            </h2>
            <br />

            <h2 className="mt-2 inline-flex items-center rounded-full py-1 px-4 text-orange-600 ring-1 ring-inset ring-orange-600" id="comprar-titulo">
              <span className="font-mono text-sm" aria-hidden="true">03</span>
              <span className="ml-3 h-3.5 w-px bg-orange-600/20"></span>
              <span className="ml-3 text-base font-medium tracking-tight">Opções Saudáveis</span>
            </h2>
            <br />

            <h2 className="mt-2 inline-flex items-center rounded-full py-1 px-4 text-orange-600 ring-1 ring-inset ring-orange-600" id="comprar-titulo">
              <span className="font-mono text-sm" aria-hidden="true">04</span>
              <span className="ml-3 h-3.5 w-px bg-orange-600/20"></span>
              <span className="ml-3 text-base font-medium tracking-tight">Pães e Bolos</span>
            </h2>
            <br />

            <h2 className="mt-2 inline-flex items-center rounded-full py-1 px-4 text-orange-600 ring-1 ring-inset ring-orange-600" id="comprar-titulo">
              <span className="font-mono text-sm" aria-hidden="true">→</span>
              <span className="ml-3 h-3.5 w-px bg-orange-600/20"></span>
              <span className="ml-3 text-base font-medium tracking-tight">2 Bônus Exclusivos</span>
            </h2>
            <br />

            <p className="mt-4 text-lg tracking-tight text-zinc-300">As receitas são apresentadas de maneira clara e objetiva, acompanhadas de fotos que deixarão você com água na boca.<br/>O livro é perfeito para quem busca agradar a família e amigos com pratos saborosos e inovadores. </p>
              <br />
              <a href="#comprar" className="rounded-md bg-orange-600 py-3 px-6 text-sm sm:text-md font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Quero agora!</a>
              <div className=''>
              </div>
              </div>
              <div>
                
              </div>
            <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
            <h2 className="inline-flex items-center rounded-full py-1 px-4 text-orange-600 ring-1 ring-inset ring-orange-600" id="comprar-titulo">
              <span className="font-mono text-sm" aria-hidden="true">→</span>
              <span className="ml-3 h-3.5 w-px bg-orange-600/20"></span>
              <span className="ml-3 text-base font-medium tracking-tight">Qual o contéudo?</span>
            </h2>
            
              <h2 className='mt-8 font-display text-5xl font-bold tracking-tight text-zinc-100'>Aprenda nesse E-book:</h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-gray-100">Com uma abordagem abrangente, incluímos uma ampla variedade de receitas que vão desde pratos salgados, doces irresistíveis, opções saudáveis até pães e bolos fresquinhos. Além disso, o livro traz dicas profissionais para garantir que suas receitas sejam um sucesso.
              que eu vou te responder o mais rápido possível!
              </p>
              <p className="mt-6 max-w-2xl text-base leading-7 text-gray-100">Com este E-book, você terá acesso além de uma variedade de receitas deliciosas e práticas, 25 Receitas Bônus (10 Receitas para Airfryer e 15 Receitas Fitness) que podem ser preparadas por qualquer pessoa, independentemente do nível de habilidade na cozinha.
              </p>
              <p className="mt-6 max-w-2xl text-base leading-7 text-gray-100">Não perca a oportunidade de explorar novos sabores e aprimorar suas habilidades culinárias com este livro incrível!
              </p>
                
              </div>

            </div>
          </div>
          
          <div id="faq" className="bg-zinc-800" >
            <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
            <h2 className="inline-flex items-center rounded-full py-1 px-4 text-orange-600 ring-1 ring-inset ring-orange-600" id="comprar-titulo">
              <span className="font-mono text-sm" aria-hidden="true">→</span>
              <span className="ml-3 h-3.5 w-px bg-orange-600/20"></span>
              <span className="ml-3 text-base font-medium tracking-tight">Perguntas</span>
            </h2>
              <h2 className='mt-8 font-display text-5xl font-bold tracking-tight text-zinc-100'>FAQ - Perguntas Frequentes</h2>
              
              <div className='mt-10'>
                <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
                  <div>
                    <dt className='text-lg font-display font-semibold tracking-tight leading-7 text-white'>Por quanto tempo vou ter acesso ao E-Book?</dt>
                    <dd className='mt-2 text-base leading-7 text-gray-100'>O acesso ao E-book de Receitas é vitalício! você pode entrar em contato diretamente pelo email sobre qualquer dúvida que surgir!
                    </dd>
                    <br />
                  </div>
                </dl>
              </div>
              <div>
                <dt className="text-lg font-display font-semibold tracking-tight leading-7 text-white">Qual o período para reembolso?</dt>
                <dd className='mt-2 text-base leading-7 text-gray-100'>Em até 7 dias após a compra você pode solicitar o reembolso direto pela plataforma da Hotmart.
                    </dd>
                    <br />
              </div>
              <div>
                <dt className="text-lg font-display font-semibold tracking-tight leading-7 text-white">Para quem é esse E-Book?</dt>
                <dd className='mt-2 text-base leading-7 text-gray-100'>Para todas pessoas que gostam de aprender e praticar novas Receitas Deliciosas e Práticas. 
                    </dd>
              </div>
              <p className="mt-6 max-w-2xl text-base leading-7 text-gray-100">Curtiu o E-book mas ainda tem dúvidas? Dá uma olhada nas perguntas frequentes pelo link de compra ou <a href="mailto:gtvmercado@gmail.com" className="hover:text-orange-30 font-semibold text-orange-600 hover:text-orange-500">envie um email </a>
              que nossa equipe te responderá o mais rápido possível!
              </p>     
            </div>   
          </div>
        </section>
        
        
        <section id="comprar" aria-labelledby="comprar-titulo" className="relative scroll-mt-14 pt-16 pb-8 sm:scroll-mt-14sm:pt-20 sm:pb-10 lg:pt-32 lg:pb-16">
          <div className="absolute inset-x-0 bottom-0 top-1/2 text-zinc-100/10 [mask-image:linear-gradient(transparent,white)]">
            <svg aria-hidden="true" className="absolute inset-0 h-full w-full">
              <defs>
                <pattern id=":R1pm:" width="128" height="128" patternUnits="userSpaceOnUse" x="50%" y="100%">
                  <path d="M0 128V.5H128" fill="none" stroke="currentColor"></path>
                  </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#:R1pm:)"></rect>
            </svg>
          </div>
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12">
            <h2 className="inline-flex items-center rounded-full py-1 px-4 text-orange-600 ring-1 ring-inset ring-orange-600" id="comprar-titulo">
              <span className="font-mono text-sm" aria-hidden="true">→</span>
              <span className="ml-3 h-3.5 w-px bg-orange-600/20"></span>
              <span className="ml-3 text-base font-medium tracking-tight">Compre aqui!</span>
            </h2>
            <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-zinc-100 sm:text-6xl">Comece a aprender agora mesmo!</p>
            <p className="mt-4 text-lg tracking-tight text-zinc-300">
              Diversas formas de pagamento para você à vista ou parcelado no cartão de crédito SEM JUROS.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl lg:px-6">
            <div className="bg-zinc-800 sm:px-6 sm:pb-16 md:rounded-6xl md:px-8 md:pt-16 lg:p-16 z-10 relative">
              <div className="flex flex-col md:flex-row py-0 sm:py-10">
                <div className="relative px-4 py-16 sm:rounded-5xl sm:px-10 md:py-12 lg:px-10 overflow-hidden flex-1 bg-orange-700 sm:shadow-lg flex-[1.1]">
                  <span className="mb-4 inline-flex items-center rounded-md bg-purple-600 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-purple-800">VALOR PROMOCIONAL ATÉ 13/05/2023</span>
                  <div className="absolute inset-0 text-white/10 [mask-image:linear-gradient(white,transparente)]">
                    <svg aria-hidden="true" className="absolute inset-0 h-full w-full">
                    <defs>
                    <pattern id=":Rbpm:" width="128" height="128" patternUnits="userSpaceOnUse" x="50%" y="50%">
                      <path d="M0 128V.5H128" fill="none" stroke="currentColor"></path>
                  </pattern>
                  </defs>
                    <rect width="100%" height="100%" fill="url(#:Rbpm:)"></rect>
                    </svg>
                  </div>
                  <div className="relative flex flex-col">
                    <h3 className="mt-7 text-lg font-semibold tracking-tight text-white">Á vista por R$67,90</h3>
                    <p className="mt-2 text-lg tracking-tight text-white">Você aprende e doa! <span className="font-bold">3% de cada venda</span> será doado para a <a href="" target="_blank" rel="noreferrer" className="underline">CUFA (Central Única das Favelas) </a> 
                     através do <a className="underline" target="_blank" rel="noreferrer" href="">Hotmart One</a>
                     </p>
                     <div className="order-first">
                      <span className="text-white font-bold"></span>
                      <p className="flex font-bold">
                        <span className="text-[1.75rem] leading-tight text-orange-200">R$</span>
                        <span className="ml-1 mt-1 tracking-tight text-white text-6xl">
                          23,95
                          <span className="text-lg"> x 3</span></span>
                      </p>
                     </div>
                     <div className="order-last mt-8">
                      <ul role="list" className="-my-2 divide-y text-base tracking-tight divide-white/10 text-white">
                        <li className="flex py-2 leading-6 items-center">
                          <svg aria-hidden="true" viewBox="0 0 32 32" className="h-8 w-8 flex none fill-white">
                          <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path>
                          </svg>
                          <span className="ml-4">300 Receitas Incríveis ao total</span>
                        </li>
                        <li className="flex py-2 leading-6 items-center">
                          <svg aria-hidden="true" viewBox="0 0 32 32" className="h-8 w-8 flex none fill-white">
                          <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path>
                          </svg>
                          <span className="ml-4">2 Bônus Exclusivos</span>
                        </li>
                        <li className="flex py-2 leading-6 items-center">
                          <svg aria-hidden="true" viewBox="0 0 32 32" className="h-8 w-8 flex none fill-white">
                          <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path>
                          </svg>
                          <span className="ml-4">10 Receitas Airfryer e 15 Receitas Fitness</span>
                        </li>
                        <li className="flex py-2 leading-6 items-center">
                          <svg aria-hidden="true" viewBox="0 0 32 32" className="h-8 w-8 flex none fill-white">
                          <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path>
                          </svg>
                          <span className="ml-4">Parcelamento em até 3x SEM JUROS</span>
                        </li>
                      </ul>
                     </div>
                     <a className="inline-flex justify-center rounded-md py-4 px-4 text-base font-semibold tracking-tight shadow-sm focus:outline-none bg-zinc-900 text-white hover:bg-zinc-700 focus-visible:text-orange-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-orange-50 active:text-orange-900/80 disabled:opacity-40 disabled:hover:text-orange-600 mt-8" aria-label="Get started with the Á vista por R$67,90 plan for $[object Object]" href="https://hotm.art/hfrObDn1">Comprar</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
    

          <div >  
            <section>
              <footer className="relative pt-5 pb-20 sm:pb-32 sm:pt-14">
                <div className="absolute inset-x-0 top-0 h-32 text-zinc-100/10 [mask-image:linear-gradient(white, transparent)]">
                <svg aria-hidden="true" className="absolute inset-0 h-full w-full">
                  <defs>
                    <pattern id=":R1rm:" width="128" height="128" patternUnits="userSpaceOnUse" x="50%">
                      <path d="M0 128V.5H128" fill="none" stroke="currentColor"></path>
                      </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#:R1rm:)"></rect>
                    </svg>
                </div>
                <div className="relative text-center text-sm text-zinc-300">
                  <p>Copyright © 2023 Campos Tech</p>
                  <p>Todos os direitos reservados.</p>
                  </div>
              </footer>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
