const TOKEN_KEY = "feature-track-admin-token";
const ADMIN_KEY = "feature-track-admin-user";

export function getStoredAdminSession() {
  if (typeof window === "undefined") {
    return null;
  }

  const token = window.localStorage.getItem(TOKEN_KEY);
  const serializedAdmin = window.localStorage.getItem(ADMIN_KEY);

  if (!token || !serializedAdmin) {
    return null;
  }

  try {
    return {
      token,
      admin: JSON.parse(serializedAdmin),
    };
  } catch {
    clearStoredAdminSession();
    return null;
  }
}

export function setStoredAdminSession(session) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(TOKEN_KEY, session.token);
  window.localStorage.setItem(ADMIN_KEY, JSON.stringify(session.admin));
}

export function clearStoredAdminSession() {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(TOKEN_KEY);
  window.localStorage.removeItem(ADMIN_KEY);
}

export function getStoredAdminToken() {
  return getStoredAdminSession()?.token || null;
}
