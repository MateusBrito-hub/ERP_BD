
export interface IEmpresa {
	id: number,
	unidade: string,
	nome_fantasia: string,
	razao_social: string,
	CGC: number,
	regime_tributario: string,
	inscricao_estadual?: number,
	inscricao_estadual_ST?: number,
	inscricao_municipal?: number,
	email: string,
	contato: number,
	endereco: string,
	endereco_num: number,
	bairro: string,
	cidade: string,
	UF: string,
	CEP: number
}
