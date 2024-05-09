const express = require('express'); 
const bodyParser = require('body-parser');

const app = express(); 
app.use(bodyParser.json());
let livros = [];
app.get('/livros', (req, res) => { 
    res.json(livros); 
    });
    app.get('/livros/:id_livro', (req, res) => { 
        const { id_livro } = req.params; 
        const livro = livros.find(v => v.id_livro === id_livro); 
        if (livro) { 
        res.json(livro); 
        } else { 
        res.status(404).json({ message: 'Livro não encontrado.' }); 
        } 
        });
            
        app.get('/livros/:id_livros', (req, res) => { 
            const { id_livros } = req.params; 
            const livros = livros.find(v => v.id_livros === id_livros); 
            if (livro) { 
            res.json(livro); 
            } else { 
            res.status(404).json({ message: 'Livro não encontrado.' }); 
            } 
            });
            app.post('/livros', (req, res) => { 
                const { id_livro, genero, capa, ano } = req.body; 
                const livro= { id_livro, genero, capa, ano }; 
                livros.push(livro); 
                res.status(201).json({ message: 'Livro cadastrado com sucesso.' }); 
                });
                
                app.put('/livros/:id_livro', (req, res) => { 
                    const { id_livro } = req.params; 
                    const { genero, capa, ano } = req.body; 
                    const livro= livros.find(v => v.id_livro === id_livro); 
                    if (livro) { 
                    livro.genero = genero || livro.genero; 
                    livro.capa = capa || livro.capa; 
                    livro.ano = ano || livro.ano; 
                    res.json({ message: 'Informações do livro atualizadas com sucesso.' });
                    } else {
                    res.status(404).json({ message: 'Livro não encontrado.' }); 
                    } 
                    });

                    app.delete('/livros/:id_livro', (req, res) => { 
                        const { id_livro } = req.params; 
                        const veiculoIndex = veiculos.findIndex(v => v.placa === placa); 
                        if (veiculoIndex !== -1) { 
                        veiculos.splice(veiculoIndex, 1); 
                        res.json({ message: 'Livro Excluido com sucesso!' }); 
                        } else { 
                        res.status(404).json({ message: 'Livro não encontrado.' }); 
                        } 
                        });
                        const port = 3000; 
                        app.listen(port, () => { 
                            console.log(`Servidor rodando em http://localhost:${port}`); 
                            });
                                                    