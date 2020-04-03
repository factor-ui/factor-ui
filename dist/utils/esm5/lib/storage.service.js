import { __decorate, __param } from "tslib";
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as CryptoJS from 'crypto-js';
import * as i0 from "@angular/core";
// Only works on client storage
var StorageService = /** @class */ (function () {
    function StorageService(platformId, configuration) {
        this.platformId = platformId;
        this.configuration = configuration;
    }
    StorageService.prototype.getValue = function (key, storage) {
        var value;
        if (!storage || typeof storage == 'string') {
            switch (storage) {
                case 'local':
                case 'localStorage':
                    value = localStorage[key];
                    break;
                case 'memory':
                    value = this.memoryStorage[key];
                    break;
                default:
                    value = sessionStorage[key];
                    break;
            }
        }
        else if (typeof storage == 'object') {
            value = storage[key];
        }
        return this.decrypt(value);
    };
    StorageService.prototype.decrypt = function (value) {
        if (value !== null &&
            value !== undefined &&
            value !== '' &&
            this.configuration &&
            this.configuration.storage &&
            this.configuration.storage.encryptionSecret) {
            var decryptedValue = CryptoJS.AES.decrypt(value, this.configuration.storage.encryptionSecret);
            value = decryptedValue.toString(CryptoJS.enc.Utf8);
        }
        return value;
    };
    StorageService.prototype.encrypt = function (value) {
        if (value !== null &&
            value !== undefined &&
            value !== '' &&
            this.configuration &&
            this.configuration.storage &&
            this.configuration.storage.encryptionSecret) {
            value = CryptoJS.AES.encrypt(value, this.configuration.storage.encryptionSecret);
            return value.toString();
        }
        else {
            return value;
        }
    };
    StorageService.prototype.delete = function (key, storage) {
        if (isPlatformBrowser(this.platformId)) {
            if (!storage || typeof storage == 'string') {
                switch (storage) {
                    case 'local':
                    case 'localStorage':
                        delete localStorage[key];
                        break;
                    case 'memory':
                        delete this.memoryStorage[key];
                        break;
                    default:
                        delete sessionStorage[key];
                        break;
                }
            }
            else if (typeof storage == 'object') {
                delete storage[key];
            }
        }
    };
    StorageService.prototype.get = function (key, storage) {
        var parsedValue;
        if (isPlatformBrowser(this.platformId)) {
            try {
                parsedValue = JSON.parse(this.getValue(key, storage));
            }
            catch (err) {
                parsedValue = this.getValue(key, storage);
            }
        }
        return parsedValue;
    };
    StorageService.prototype.set = function (key, value, storage) {
        if (isPlatformBrowser(this.platformId)) {
            var valueEncrypted = this.encrypt(JSON.stringify(value));
            if (!storage || typeof storage == 'string') {
                switch (storage) {
                    case 'local':
                    case 'localStorage':
                        localStorage[key] = valueEncrypted;
                        break;
                    case 'memory':
                        this.memoryStorage[key] = valueEncrypted;
                        break;
                    default:
                        sessionStorage[key] = valueEncrypted;
                        break;
                }
            }
            else {
                storage[key] = valueEncrypted;
            }
        }
    };
    StorageService.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: undefined, decorators: [{ type: Inject, args: ['FactorUtilsConfiguration',] }] }
    ]; };
    StorageService.ɵprov = i0.ɵɵdefineInjectable({ factory: function StorageService_Factory() { return new StorageService(i0.ɵɵinject(i0.PLATFORM_ID), i0.ɵɵinject("FactorUtilsConfiguration")); }, token: StorageService, providedIn: "root" });
    StorageService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __param(0, Inject(PLATFORM_ID)),
        __param(1, Inject('FactorUtilsConfiguration'))
    ], StorageService);
    return StorageService;
}());
export { StorageService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmFjdG9yLXV0aWxzLyIsInNvdXJjZXMiOlsibGliL3N0b3JhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFhLE1BQU0sRUFBRSxVQUFVLEVBQVUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXBELE9BQU8sS0FBSyxRQUFRLE1BQU0sV0FBVyxDQUFDOztBQUV0QywrQkFBK0I7QUFJL0I7SUFJRSx3QkFDK0IsVUFBa0IsRUFDSCxhQUFhO1FBRDVCLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDSCxrQkFBYSxHQUFiLGFBQWEsQ0FBQTtJQUN2RCxDQUFDO0lBRUcsaUNBQVEsR0FBaEIsVUFBaUIsR0FBVyxFQUFFLE9BQWE7UUFDekMsSUFBSSxLQUFVLENBQUM7UUFDZixJQUFJLENBQUMsT0FBTyxJQUFJLE9BQU8sT0FBTyxJQUFJLFFBQVEsRUFBRTtZQUMxQyxRQUFRLE9BQU8sRUFBRTtnQkFDZixLQUFLLE9BQU8sQ0FBQztnQkFDYixLQUFLLGNBQWM7b0JBQ2pCLEtBQUssR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzFCLE1BQU07Z0JBQ1IsS0FBSyxRQUFRO29CQUNYLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNoQyxNQUFNO2dCQUNSO29CQUNFLEtBQUssR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzVCLE1BQU07YUFDVDtTQUNGO2FBQU0sSUFBSSxPQUFPLE9BQU8sSUFBSSxRQUFRLEVBQUU7WUFDckMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN0QjtRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ08s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TyxJQUFJLFFBQVEsRUFBRTtnQkFDMUMsUUFBUSxPQUFPLEVBQUU7b0JBQ2YsS0FBSyxPQUFPLENBQUM7b0JBQ2IsS0FBSyxjQUFjO3dCQUNqQixZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsY0FBYyxDQUFDO3dCQUNuQyxNQUFNO29CQUNSLEtBQUssUUFBUTt3QkFDWCxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLGNBQWMsQ0FBQzt3QkFDekMsTUFBTTtvQkFDUjt3QkFDRSxjQUFjLENBQUMsR0FBRyxDQUFDLEdBQUcsY0FBYyxDQUFDO3dCQUNyQyxNQUFNO2lCQUNUO2FBQ0Y7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLGNBQWMsQ0FBQzthQUMvQjtTQUNGO0lBQ0gsQ0FBQzs7Z0JBdEcwQyxNQUFNLHVCQUE5QyxNQUFNLFNBQUMsV0FBVztnREFDbEIsTUFBTSxTQUFDLDBCQUEwQjs7O0lBTnpCLGNBQWM7UUFIMUIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztRQU1HLFdBQUEsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ25CLFdBQUEsTUFBTSxDQUFDLDBCQUEwQixDQUFDLENBQUE7T0FOMUIsY0FBYyxDQTRHMUI7eUJBckhEO0NBcUhDLEFBNUdELElBNEdDO1NBNUdZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgSW5qZWN0YWJsZSwgT25Jbml0LCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgKiBhcyBDcnlwdG9KUyBmcm9tICdjcnlwdG8tanMnO1xuXG4vLyBPbmx5IHdvcmtzIG9uIGNsaWVudCBzdG9yYWdlXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTdG9yYWdlU2VydmljZSB7XG4gIC8vVE9ETzogUmVwbGFjZSB3aXRoIE1hcCBvYmplY3QgaXQgaXMgbW9yZSBlZmZpY2llbnRcbiAgbWVtb3J5U3RvcmFnZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0LFxuICAgIEBJbmplY3QoJ0ZhY3RvclV0aWxzQ29uZmlndXJhdGlvbicpIHByaXZhdGUgY29uZmlndXJhdGlvblxuICApIHsgfVxuXG4gIHByaXZhdGUgZ2V0VmFsdWUoa2V5OiBzdHJpbmcsIHN0b3JhZ2U/OiBhbnkpOiBhbnkge1xuICAgIGxldCB2YWx1ZTogYW55O1xuICAgIGlmICghc3RvcmFnZSB8fCB0eXBlb2Ygc3RvcmFnZSA9PSAnc3RyaW5nJykge1xuICAgICAgc3dpdGNoIChzdG9yYWdlKSB7XG4gICAgICAgIGNhc2UgJ2xvY2FsJzpcbiAgICAgICAgY2FzZSAnbG9jYWxTdG9yYWdlJzpcbiAgICAgICAgICB2YWx1ZSA9IGxvY2FsU3RvcmFnZVtrZXldO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtZW1vcnknOlxuICAgICAgICAgIHZhbHVlID0gdGhpcy5tZW1vcnlTdG9yYWdlW2tleV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdmFsdWUgPSBzZXNzaW9uU3RvcmFnZVtrZXldO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHN0b3JhZ2UgPT0gJ29iamVjdCcpIHtcbiAgICAgIHZhbHVlID0gc3RvcmFnZVtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5kZWNyeXB0KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIGRlY3J5cHQodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJlxuICAgICAgdmFsdWUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgdmFsdWUgIT09ICcnICYmXG4gICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gJiZcbiAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5zdG9yYWdlICYmXG4gICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc3RvcmFnZS5lbmNyeXB0aW9uU2VjcmV0KSB7XG4gICAgICBjb25zdCBkZWNyeXB0ZWRWYWx1ZSA9IENyeXB0b0pTLkFFUy5kZWNyeXB0KHZhbHVlLCB0aGlzLmNvbmZpZ3VyYXRpb24uc3RvcmFnZS5lbmNyeXB0aW9uU2VjcmV0KTtcbiAgICAgIHZhbHVlID0gZGVjcnlwdGVkVmFsdWUudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBlbmNyeXB0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUgIT09IG51bGwgJiZcbiAgICAgIHZhbHVlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIHZhbHVlICE9PSAnJyAmJlxuICAgICAgdGhpcy5jb25maWd1cmF0aW9uICYmXG4gICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc3RvcmFnZSAmJlxuICAgICAgdGhpcy5jb25maWd1cmF0aW9uLnN0b3JhZ2UuZW5jcnlwdGlvblNlY3JldCkge1xuICAgICAgdmFsdWUgPSBDcnlwdG9KUy5BRVMuZW5jcnlwdCh2YWx1ZSwgdGhpcy5jb25maWd1cmF0aW9uLnN0b3JhZ2UuZW5jcnlwdGlvblNlY3JldCk7XG4gICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICB9XG5cbiAgcHVibGljIGRlbGV0ZShrZXk6IHN0cmluZywgc3RvcmFnZT8pIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgaWYgKCFzdG9yYWdlIHx8IHR5cGVvZiBzdG9yYWdlID09ICdzdHJpbmcnKSB7XG4gICAgICAgIHN3aXRjaCAoc3RvcmFnZSkge1xuICAgICAgICAgIGNhc2UgJ2xvY2FsJzpcbiAgICAgICAgICBjYXNlICdsb2NhbFN0b3JhZ2UnOlxuICAgICAgICAgICAgZGVsZXRlIGxvY2FsU3RvcmFnZVtrZXldO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnbWVtb3J5JzpcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLm1lbW9yeVN0b3JhZ2Vba2V5XTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBkZWxldGUgc2Vzc2lvblN0b3JhZ2Vba2V5XTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzdG9yYWdlID09ICdvYmplY3QnKSB7XG4gICAgICAgIGRlbGV0ZSBzdG9yYWdlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHB1YmxpYyBnZXQoa2V5OiBzdHJpbmcsIHN0b3JhZ2U/KTogYW55IHtcbiAgICBsZXQgcGFyc2VkVmFsdWU6IGFueTtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcGFyc2VkVmFsdWUgPSBKU09OLnBhcnNlKHRoaXMuZ2V0VmFsdWUoa2V5LCBzdG9yYWdlKSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcGFyc2VkVmFsdWUgPSB0aGlzLmdldFZhbHVlKGtleSwgc3RvcmFnZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRWYWx1ZTtcbiAgfVxuICBwdWJsaWMgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55LCBzdG9yYWdlPykge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICBjb25zdCB2YWx1ZUVuY3J5cHRlZCA9IHRoaXMuZW5jcnlwdChKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgICAgaWYgKCFzdG9yYWdlIHx8IHR5cGVvZiBzdG9yYWdlID09ICdzdHJpbmcnKSB7XG4gICAgICAgIHN3aXRjaCAoc3RvcmFnZSkge1xuICAgICAgICAgIGNhc2UgJ2xvY2FsJzpcbiAgICAgICAgICBjYXNlICdsb2NhbFN0b3JhZ2UnOlxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlW2tleV0gPSB2YWx1ZUVuY3J5cHRlZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ21lbW9yeSc6XG4gICAgICAgICAgICB0aGlzLm1lbW9yeVN0b3JhZ2Vba2V5XSA9IHZhbHVlRW5jcnlwdGVkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlW2tleV0gPSB2YWx1ZUVuY3J5cHRlZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdG9yYWdlW2tleV0gPSB2YWx1ZUVuY3J5cHRlZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==