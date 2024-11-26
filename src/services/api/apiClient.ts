// Definição da URL base
const baseURL = process.env.DEV_API;

interface FetchOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  endpoint: string;
  body?: object;
  token?: string;
}

export async function apiRequest<T>({
  method,
  endpoint,
  body,
  token,
}: FetchOptions): Promise<T> {
  const headers: Record<string, string> = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  // Formando a URL completa
  const fullUrl = `${baseURL}${endpoint}`;

  try {
    const response = await fetch(fullUrl, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    // Se a resposta não for ok, captura os detalhes
    if (!response.ok) {
      const errorDetails = await response.text(); // Obtendo detalhes do erro
      throw new Error(
        `HTTP Error: ${response.status} ${response.statusText} - ${errorDetails}`,
      );
    }

    // Retorna a resposta como JSON
    return (await response.json()) as T;
  } catch (error) {
    console.error(`API Request failed:`, error);
    throw error; // Repropaga o erro para quem chama a função
  }
}
