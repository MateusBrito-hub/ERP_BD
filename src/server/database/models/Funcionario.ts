
export interface IFuncionario {
	id: number,
	nome: string,
	senha: string,
	cpf: number,
	rg?: number,
	email: string,
	data_nasc?: number,
	observacao?: string,
	comissao?: number,
	desconto_max?: number,
	endereco: string,
	endereco_num: number,
	bairro: string,
	cidade: string,
	UF: string,
	CEP: number
	empresa_id: number,
	perfil_id: number,
	funcao_id: number
}
