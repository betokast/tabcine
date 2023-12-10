function status(request, response) {
  response
    .status(200)
    .json({ chave: "Teste da página de status efetuado com sucesso" });
}
export default status;
