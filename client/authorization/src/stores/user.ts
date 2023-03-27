import { readonly, ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import { API_URL } from '@/api/authorization';
import { IUser } from '@/interfaces';
import { IAuthResponse } from '@/api/authorization/interfaces';
import { AuthService, UserService } from '@/services';

/**
 * * Стор для работы с пользователем
 */
const useUserStore = defineStore('user', () => {
  /**
   * * Пользователь
   */
  const user = ref<IUser>();
  /**
   * * Проверялось ли авторизован пользователь или нет
   */
  const isAuthChecked = ref(false);
  /**
   * * Вход
   * @param email - почта
   * @param password - пароль
   */
  async function login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password);
      console.log(response);
      localStorage.setItem('token', response.data.accessToken);
      user.value = response.data.user;
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  }
  /**
   * * Регистрация
   * @param email - почта
   * @param password - пароль
   */
  async function registration(email: string, password: string) {
    try {
      const response = await AuthService.registration(email, password);
      console.log(response);
      localStorage.setItem('token', response.data.accessToken);
      user.value = response.data.user;
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  }
  /**
   * * Отмена регистрации
   * @param userId - id пользователя
   */
  async function cancelRegistration(userId: string) {
    try {
      const response = await AuthService.cancelRegistration(userId);
      console.log(response);
      localStorage.removeItem('token');
      user.value = undefined;
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  }
  /**
   * * Выход
   */
  async function logout() {
    try {
      await AuthService.logout();
      localStorage.removeItem('token');
      user.value = undefined;
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  }
  /**
   * * Проверка того, авторизован ли пользователь
   */
  async function checkAuth() {
    isAuthChecked.value = true;
    try {
      const response = await axios.get<IAuthResponse>(`${API_URL}/refresh`, {
        withCredentials: true,
      });
      console.log(response);
      localStorage.setItem('token', response.data.accessToken);
      user.value = response.data.user;
    } catch (e) {
      console.log(e);
    }
  }
  /**
   * * Получить пользователей
   */
  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      console.log(response);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  return {
    user: readonly(user),
    login,
    registration,
    cancelRegistration,
    logout,
    checkAuth,
    isAuthChecked: readonly(isAuthChecked),
    getUsers,
  };
});

export default useUserStore;
