import client from "./client";

export async function deleteUserSetting(stringId, settingName) {
  try {
    console.log(stringId + " - " + settingName);
    const { data: result, ok } = await client.post("/user-setting-delete", {
      stringId,
      settingName,
    });
    if (ok) return result;
  } catch (error) {
    return [];
  }
}

export async function saveUserSetting(stringId, settingName) {
  try {
    const { data: result, ok } = await client.post("/user-setting-save", {
      stringId,
      settingName,
    });

    if (ok) return result;
  } catch (error) {
    return [];
  }
}

export async function getUserSettings() {
  try {
    const { data: result, ok } = await client.post("/user-account");

    if (ok) return result;
  } catch (error) {
    return [];
  }
}

export default {
  getUserSettings,
  saveUserSetting,
  deleteUserSetting,
};
