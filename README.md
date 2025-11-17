# Ponto Digital Pro

Sistema de gerenciamento de horas e projetos com React + Supabase REST API

## 🚀 Características

- ✅ Gerenciamento de projetos e tarefas
- ✅ Banco de horas e rastreamento de tempo
- ✅ Autenticação com Supabase
- ✅ API REST pura (sem dependências externas de SDK)
- ✅ Multi-tenant architecture
- ✅ Dark mode
- ✅ Relatórios e analytics

## 📋 Pré-requisitos

- Node.js 16+
- npm ou yarn
- Conta Supabase (gratuita em https://supabase.com)

## 🔧 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/vandersonr7/ponto-digital-pro.git
cd ponto-digital-pro
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
REACT_APP_SUPABASE_URL=https://seu-projeto.supabase.co
REACT_APP_SUPABASE_ANON_KEY=sua-chave-anonima
```

### 4. Inicie a aplicação

```bash
npm start
```

A aplicação estará disponível em `http://localhost:3000`

## 🗄️ Banco de Dados (Supabase)

### Schema PostgreSQL

O banco de dados inclui as seguintes tabelas:

```sql
- organizations
- users
- clients
- workspaces
- boards
- kanban_columns
- tasks
- punches
- audit_logs
```

Todas as tabelas possuem `organization_id` para suporte a multi-tenancy.

## 🔐 Autenticação

A aplicação usa Supabase Auth com JWT tokens. O arquivo `supabaseApi.ts` gerencia:

- Login/Logout
- Gerenciamento de sessão
- Listeners de mudança de autenticação

## 📦 Arquivos Principais

- `src/app/services/supabaseClient.ts` - Configuração do cliente Supabase
- `src/app/services/supabaseApi.ts` - API wrapper com fetch()
- `src/app/contexts/AuthContext.tsx` - Context de autenticação
- `src/app/pages/` - Páginas da aplicação
- `src/app/components/` - Componentes reutilizáveis

## 🚀 Deploy

### Vercel (Recomendado)

1. Faça push para GitHub
2. Conecte seu repositório no [Vercel](https://vercel.com)
3. Adicione as variáveis de ambiente
4. Deploy automático ✨

### Netlify

1. Conecte seu repositório
2. Defina o comando de build: `npm run build`
3. Defina o diretório de publicação: `build`
4. Adicione as variáveis de ambiente

## 💻 Desenvolvimento

### Estrutura do Projeto

```
src/
├── app/
│   ├── components/     # Componentes React
│   ├── contexts/       # React Contexts
│   ├── pages/         # Páginas da aplicação
│   ├── services/      # Serviços (Supabase, etc)
│   ├── types.ts       # TypeScript types
│   ├── utils/         # Funções utilitárias
│   └── App.tsx        # Componente raiz
├── index.html         # HTML principal
└── index.tsx          # Ponto de entrada React
```

## 🔌 API REST Supabase

A integração com Supabase usa **API REST pura** via `fetch()`, sem imports de bibliotecas externas:

```typescript
const response = await fetch(
  `${supabaseUrl}/rest/v1/users?select=*`,
  {
    method: 'GET',
    headers: {
      'apikey': supabaseAnonKey,
      'Authorization': `Bearer ${accessToken}`,
      'Accept': 'application/vnd.pgrst.object+json'
    }
  }
);
```

## 📚 Documentação

Ver o arquivo de guia de integração: `INTEGRATION_GUIDE.md` (em desenvolvimento)

## 🐛 Reportar Bugs

Abra uma issue em https://github.com/vandersonr7/ponto-digital-pro/issues

## 📄 Licença

MIT

## 👨‍💼 Autor

vandersonr7 - [GitHub](https://github.com/vandersonr7)

---

**Desenvolvido com ❤️ em Santa Catarina, Brasil**
