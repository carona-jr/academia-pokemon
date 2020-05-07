const queryInsert = {
    text : 'INSERT INTO Proficiencia (cpf, proficiencia) VALUES ($1, $2)',
}

const queryFindByCpf = {
    text: 'SELECT * FROM Proficiencia WHERE cpf = $1'
}

const queryFindByCpfAndProf = {
    text: 'SELECT * FROM Proficiencia WHERE cpf = $1 AND proficiencia = $2'
}

const queryDeleteByCpfAndProf = {
    text: 'DELETE FROM Proficiencia WHERE cpf = $1 AND proficiencia = $2'
}

const queryDeleteByCpf = {
    text: 'DELETE FROM Proficiencia WHERE cpf = $1'
}

module.exports = {
    queryInsert,
    queryFindByCpf,
    queryDeleteByCpf,
    queryDeleteByCpfAndProf,
    queryFindByCpfAndProf
}