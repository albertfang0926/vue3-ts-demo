<template>
  <div class="login-container">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户：" prop="username">
        <el-input
          v-model="ruleForm.username"
          type="password"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input
          v-model="ruleForm.password"
          type="password"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)"
          >Submit</el-button
        >
        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import type { FormRules } from "element-plus";

const ruleForm = reactive({
  username: "",
  password: "",
});
const rules = reactive<FormRules>({
  pass: [
    { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
  ],
  checkPass: [
    { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
  ],
});

function submitForm() {
  console.log("Submit Form");
}
function resetForm() {
  console.log("Submit Form");
}
</script>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100%;
  background: url("../assets/login-bg.jpg");
  padding: 1px;
  .demo-ruleForm {
    width: 500px;
    margin: 200px auto;
    padding: 30px;
    background: white;
    border-radius: 40px;
  }
}
</style>
