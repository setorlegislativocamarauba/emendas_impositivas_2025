/**
 * Configuração fixa do Portal de Emendas Impositivas - Ubá / MG
 *
 * O link da planilha fica preso e fixo diretamente no código-fonte,
 * sem necessidade do usuário colar ou configurar links na interface.
 * Para mudar de ano (ex.: 2026 -> 2027), basta alterar estas constantes ou
 * clonar o repositório para o novo exercício.
 */

// 1. Mude o ano do exercício
export const EXERCICIO_ATUAL = '2025';

// 2. Cole o link público da planilha de 2025
export const FIXED_GOOGLE_SHEETS_URL: string = 'https://docs.google.com/spreadsheets/d/SEU_ID_DA_PLANILHA/edit#gid=0';

// Título e Subtítulo oficiais do portal
export const PORTAL_TITULO = 'Câmara Municipal de Ubá';
export const PORTAL_SUBTITULO = 'Estado de Minas Gerais • Sistema Oficial de Emendas Impositivas';
export const PORTAL_EXERCICIO_LABEL = `Exercício ${EXERCICIO_ATUAL}`;
