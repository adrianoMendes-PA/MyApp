import AsyncStorage from '@react-native-async-storage/async-storage';
import {apiRequest} from './apiClient';

// Interfaces para as estruturas de dados
interface Usuario {
  nome: string;
  senha: string;
  cidade: string;
  estado: string;
}

interface LoginResponse {
  token: string;
  userId: string;
}

interface Tanque {
  nome_tanque: string;
  profundidade: number;
  largura: number;
  comprimento: number;
  tipo_peixe: string;
  quant_peixe: number;
}

interface Peixe {
  tipo_peixe: string;
  quant_peixe: number;
  fase_criacao: string;
}

// Objeto de API com os métodos
const api = {
  // Cadastro de usuário
  cadastroUsuario: async (data: Usuario): Promise<any> => {
    return apiRequest({
      method: 'POST',
      endpoint: '/usuario',
      body: data,
    });
  },

  // Login do usuário
  login: async (nome: string, senha: string): Promise<LoginResponse> => {
    return apiRequest<LoginResponse>({
      method: 'POST',
      endpoint: '/session',
      body: {nome, senha},
    });
  },

  // Cadastro de tanque
  cadastraTanque: async (
    nome_tanque: string,
    profundidade: string,
    largura: string,
    comprimento: string,
    tipo_peixe: string,
    quant_peixe: string,
    data: Tanque,
  ): Promise<any> => {
    const token = await AsyncStorage.getItem('token');
    return apiRequest({
      method: 'POST',
      endpoint: '/tanque',
      body: data,
      token: token || '',
    });
  },

  // Cadastro de peixe
  cadastraPeixe: async (
    tipo_peixe: number,
    quant_peixe: string,
    fase_criacao: number,
    data: Peixe,
  ): Promise<any> => {
    const token = await AsyncStorage.getItem('token');
    return apiRequest({
      method: 'POST',
      endpoint: '/peixe',
      body: data,
      token: token || '',
    });
  },

  // Delete de peixe
  deleteRegister: async (id: string): Promise<void> => {
    const token = await AsyncStorage.getItem('token');
    return apiRequest({
      method: 'DELETE',
      endpoint: `/peixe/${id}`,
      token: token || '',
    });
  },
};

// Exportação padrão
export default api;
