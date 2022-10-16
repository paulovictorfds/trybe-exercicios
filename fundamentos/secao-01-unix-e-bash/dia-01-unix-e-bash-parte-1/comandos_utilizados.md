# Comandos Utilizados:

## Criação de arquivos e diretórios

- Criar diretório e acessá-lo: `mkdir unix_tests && cd unix_tests`;
- Criar arquivo: `touch trybe.txt`;
- Criar cópia de arquivo: `cp trybe.txt trybe_backup.txt`;
- Renomear arquivo: `mv trybe.txt trybe2.txt`;
- Caminho completo do diretório atual: `pwd`
- Limpar terminal: `clear`;
- Mostrar 5 primeiras linhas de arquivo: `head -5 skills.txt`;
- Mostrar 4 últimas linhas de arquivo: `tail -4 skills.txt`;
- Apagar arquivos que terminem em .txt: `rm *.txt`.

## Manipulação & busca:

```
mkdir unix_tests_search
cd unix_tests_search
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
```

- Mostrar todo conteúdo do arquivo: `cat countries.txt`;
- Mostrar conteúdo página por página: `less countries.txt`;
