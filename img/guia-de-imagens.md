# Guia de Imagens - Site Psicóloga Rebeca Cavalcante

Aqui estão listadas todas as imagens necessárias para o funcionamento do site (arquivos estáticos). Certifique-se de nomear as imagens exatamente como listado na coluna "Arquivo" e colocá-las na pasta `dist/assets/img/` antes de enviar o site para o servidor.

| Arquivo | Seção | Tamanho Recomendado | Formato | Descrição |
|---------|-------|---------------------|---------|-----------|
| `logo.png` | Header e Footer | 400x200 (máximo) | PNG | Logotipo da psicóloga com fundo transparente. Para ser aplicado prioritariamente no fundo "Bege Off-White" (#FDFBF7). A versão branca pode ser útil caso seja inserida sobre uma imagem mais escura futuramente. |
| `hero-bg.webp` | Hero | 1920x800 | WebP | Imagem de fundo principal. Pode ser uma foto profissional do consultório (focado no aspecto acolhedor/lúdico) ou uma foto de banco de imagens abstrata/elegante infantil. Essa imagem ficará com 15% de opacidade atrás de um gradiente, então o foco é textura e cor. |
| `sobre.webp` | Quem Somos | 800x800 | WebP | Foto profissional da Psicóloga Rebeca. Sugere-se uma foto sorrindo, passando segurança, acolhimento e profissionalismo. Formato quadrado ou levemente retangular será encaixado com bordas arredondadas e um fundo decorativo no layout. |
| `favicon-16x16.png` | Head (Navegador) | 16x16 | PNG | Favicon pequeno (símbolo do logotipo) para a aba do navegador. |
| `favicon-32x32.png` | Head (Navegador) | 32x32 | PNG | Favicon padrão para a aba do navegador. |
| `apple-touch-icon.png` | Head (Navegador) | 180x180 | PNG | Ícone utilizado por dispositivos Apple ao salvar o site na tela de início. |

---

## 📌 Dicas Adicionais

* **Iframe do Google Maps**: No arquivo `dist/index.html` (linha 358), existe o espaço para o `<iframe src="https://www.google.com/maps/embed...">`. Caso você já tenha o seu local cadastrado no Google Meu Negócio, vá no Maps, clique em "Compartilhar", "Incorporar um mapa", copie o HTML (`<iframe>`) e substitua pela versão genérica que coloquei lá como placeholder.
* **Otimização**: Salve as fotos (`hero-bg` e `sobre`) sempre em formato WebP para garantir o carregamento ultra rápido da página.
