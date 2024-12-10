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
  nomeTanque: string;
  profundidade: number;
  largura: number;
  comprimento: number;
  tipoPeixe: string;
  quantPeixe: number;
}

interface Peixe {
  tipoPeixe: string;
  quantPeixe: number;
  faseCriacao: string;
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
      endpoint: '/usuario/login',
      body: {nome, senha},
    });
  },

  // Cadastro de tanque
  cadastraTanque: async (
    nomeTanque: string,
    profundidade: string,
    largura: string,
    comprimento: string,
    tipoPeixe: string,
    quantPeixe: string,
    data: Tanque,
  ): Promise<any> => {
    const token = await AsyncStorage.getItem('token');
    return apiRequest({
      method: 'POST',
      endpoint: '/tanque/createTanque',
      body: data,
      token: token || '',
    });
  },

  // Cadastro de peixe
  cadastraPeixe: async (
    tipoPeixe: string,
    quantPeixe: string,
    faseCriacao: string,
    data: Peixe,
  ): Promise<any> => {
    const token = await AsyncStorage.getItem('token');
    return apiRequest({
      method: 'POST',
      endpoint: '/peixe/createPeixe',
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
