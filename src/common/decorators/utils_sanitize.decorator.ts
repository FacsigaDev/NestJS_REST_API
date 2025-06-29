import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import sanitizeHtml from 'sanitize-html';

@ValidatorConstraint({ name: 'sanitizeHtml', async: false })
export class SanitizeHtmlConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    if (typeof value !== 'string') {
      return true; // Nem string esetén nem sanitizálunk, de validnak tekintjük
    }

    const sanitizedValue = sanitizeHtml(value, {
      allowedTags: ['b', 'i', 'u', 'p', 'strong', 'em'], // Engedélyezett HTML elemek
      allowedAttributes: {
        a: ['href'], // Csak biztonságos attribútumok
      },
      disallowedTagsMode: 'discard', // Tiltott elemek eltávolítása
    });

    // Módosítjuk az eredeti objektum értékét a sanitizált értékre
    const object = args.object as Record<string, any>;
    const property = args.property;
    object[property] = sanitizedValue;

    return true; // Mindig true, mert a sanitizálás nem érvényteleníti az adatot
  }

  defaultMessage() {
    return 'Érvénytelen szöveges tartalom';
  }
}

export function SanitizeHtml(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: SanitizeHtmlConstraint,
    });
  };
}