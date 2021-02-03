interface FieldValidation {
  name: string;
  message: string;
  value: string | number;
}

interface RegistrationField {
  type: 'text' | 'email' | 'phone' | 'password';
  name: string;
  label: string;
  required: boolean;
  validations?: FieldValidation[];
}

interface RegistrationRequest {
  [fieldName: string]: string;
}

type RegistrationResponse = RegistrationField[];
