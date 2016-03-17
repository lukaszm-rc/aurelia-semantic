System.register(['prism', 'aurelia-framework'], function (_export) {
	"use strict";

	var Prism, TargetInstruction, LogManager, child, customElement, processContent, inject, bindable, ElementExampleElement;

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

	return {
		setters: [function (_prism) {
			Prism = _prism['default'];
		}, function (_aureliaFramework) {
			TargetInstruction = _aureliaFramework.TargetInstruction;
			LogManager = _aureliaFramework.LogManager;
			child = _aureliaFramework.child;
			customElement = _aureliaFramework.customElement;
			processContent = _aureliaFramework.processContent;
			inject = _aureliaFramework.inject;
			bindable = _aureliaFramework.bindable;
		}],
		execute: function () {
			ElementExampleElement = (function () {
				var _instanceInitializers = {};
				var _instanceInitializers = {};

				_createDecoratedClass(ElementExampleElement, [{
					key: 'language',
					decorators: [bindable],
					initializer: function initializer() {
						return 'markup';
					},
					enumerable: true
				}, {
					key: 'exampleSource',
					decorators: [bindable],
					initializer: null,
					enumerable: true
				}, {
					key: 'caption',
					decorators: [bindable],
					initializer: null,
					enumerable: true
				}], null, _instanceInitializers);

				function ElementExampleElement(element, targetInstruction) {
					_classCallCheck(this, _ElementExampleElement);

					_defineDecoratedPropertyDescriptor(this, 'language', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'exampleSource', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'caption', _instanceInitializers);

					this.element = element;
					this.logger = LogManager.getLogger('element-example');
					this.exampleSource = this.extractRawContent(targetInstruction);
				}

				_createDecoratedClass(ElementExampleElement, [{
					key: 'extractRawContent',
					value: function extractRawContent(targetInstruction) {
						if (targetInstruction.elementInstruction.exampleSource) {
							var content = targetInstruction.elementInstruction.exampleSource;

							var match = /^\n(\s+)/.exec(content);
							if (match) {
								var indent = match[1];
								var re = new RegExp('\n' + indent, 'g');

								content = content.replace(re, "\n");
							}

							content = content.replace(/\t/g, '    ').trim();

							return content;
						} else {
							return "";
						}
					}
				}, {
					key: 'attached',
					value: function attached() {
						var sourceEl = this.element.querySelector('.example-source');
						if (sourceEl) {
							this.logger.debug("Highlighting ", sourceEl, ' as ' + this.language + '.');
							Prism.highlightElement(sourceEl);
						} else {
							this.logger.error("Couldn't find the source element for", this.element);
						}
					}
				}], null, _instanceInitializers);

				var _ElementExampleElement = ElementExampleElement;
				ElementExampleElement = customElement('element-example')(ElementExampleElement) || ElementExampleElement;
				ElementExampleElement = inject(Element, TargetInstruction)(ElementExampleElement) || ElementExampleElement;
				ElementExampleElement = processContent(function (compiler, resources, element, instruction) {
					var exampleSource = element.innerHTML;
					if (exampleSource !== '') {
						instruction.exampleSource = exampleSource;
					}

					return true;
				})(ElementExampleElement) || ElementExampleElement;
				return ElementExampleElement;
			})();

			_export('ElementExampleElement', ElementExampleElement);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZWxlbWVudC1leGFtcGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxhQUFZLENBQUM7O21HQXdCQSxxQkFBcUI7Ozs7Ozs7Ozs7Ozt5Q0FuQmpDLGlCQUFpQjtrQ0FDakIsVUFBVTs2QkFDVixLQUFLO3FDQUNMLGFBQWE7c0NBQ2IsY0FBYzs4QkFDZCxNQUFNO2dDQUNOLFFBQVE7OztBQWFJLHdCQUFxQjs7OzswQkFBckIscUJBQXFCOztrQkFFaEMsUUFBUTs7YUFBWSxRQUFROzs7OztrQkFDNUIsUUFBUTs7Ozs7a0JBQ1IsUUFBUTs7Ozs7QUFHRSxhQVBDLHFCQUFxQixDQU9wQixPQUFPLEVBQUUsaUJBQWlCLEVBQUc7Ozs7Ozs7OztBQUN6QyxTQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixTQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUUsaUJBQWlCLENBQUUsQ0FBQztBQUN4RCxTQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBRSxpQkFBaUIsQ0FBRSxDQUFDO0tBQ2pFOzswQkFYVyxxQkFBcUI7O1lBY2hCLDJCQUFFLGlCQUFpQixFQUFHO0FBQ3RDLFVBQUssaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFHO0FBQ3pELFdBQUksT0FBTyxHQUFHLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQzs7QUFFakUsV0FBSSxLQUFLLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBRSxPQUFPLENBQUUsQ0FBQztBQUN2QyxXQUFLLEtBQUssRUFBRztBQUNaLFlBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0QixZQUFJLEVBQUUsR0FBRyxJQUFJLE1BQU0sUUFBTyxNQUFNLEVBQUksR0FBRyxDQUFFLENBQUE7O0FBRXpDLGVBQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFFLEVBQUUsRUFBRSxJQUFJLENBQUUsQ0FBQztRQUN0Qzs7QUFFRCxjQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBRSxLQUFLLEVBQUUsTUFBTSxDQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7O0FBRWxELGNBQU8sT0FBTyxDQUFDO09BQ2YsTUFBTTtBQUNOLGNBQU8sRUFBRSxDQUFDO09BQ1Y7TUFDRDs7O1lBRU8sb0JBQUc7QUFDVixVQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBRSxpQkFBaUIsQ0FBRSxDQUFDO0FBQy9ELFVBQUssUUFBUSxFQUFHO0FBQ2YsV0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUUsZUFBZSxFQUFFLFFBQVEsV0FBUyxJQUFJLENBQUMsUUFBUSxPQUFLLENBQUM7QUFDeEUsWUFBSyxDQUFDLGdCQUFnQixDQUFFLFFBQVEsQ0FBRSxDQUFDO09BQ25DLE1BQU07QUFDTixXQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBRSxzQ0FBc0MsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFFLENBQUM7T0FDMUU7TUFDRDs7O2lDQTFDVyxxQkFBcUI7QUFBckIseUJBQXFCLEdBRGpDLGFBQWEsQ0FBRSxpQkFBaUIsQ0FBRSxDQUN0QixxQkFBcUIsS0FBckIscUJBQXFCO0FBQXJCLHlCQUFxQixHQUZqQyxNQUFNLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDLENBRXRCLHFCQUFxQixLQUFyQixxQkFBcUI7QUFBckIseUJBQXFCLEdBVmpDLGNBQWMsQ0FBRSxVQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBSztBQUMvRCxTQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO0FBQ3RDLFNBQUssYUFBYSxLQUFLLEVBQUUsRUFBRztBQUMzQixpQkFBVyxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7TUFDMUM7O0FBRUQsWUFBTyxJQUFJLENBQUM7S0FDWixDQUFDLENBR1cscUJBQXFCLEtBQXJCLHFCQUFxQjtXQUFyQixxQkFBcUIiLCJmaWxlIjoiY29tcG9uZW50cy9lbGVtZW50LWV4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUHJpc20gZnJvbSAncHJpc20nO1xuXG5pbXBvcnQge1xuXHRUYXJnZXRJbnN0cnVjdGlvbixcblx0TG9nTWFuYWdlcixcblx0Y2hpbGQsXG5cdGN1c3RvbUVsZW1lbnQsXG5cdHByb2Nlc3NDb250ZW50LFxuXHRpbmplY3QsXG5cdGJpbmRhYmxlXG59IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQHByb2Nlc3NDb250ZW50KCAoY29tcGlsZXIsIHJlc291cmNlcywgZWxlbWVudCwgaW5zdHJ1Y3Rpb24pID0+IHtcblx0bGV0IGV4YW1wbGVTb3VyY2UgPSBlbGVtZW50LmlubmVySFRNTDtcblx0aWYgKCBleGFtcGxlU291cmNlICE9PSAnJyApIHtcblx0XHRpbnN0cnVjdGlvbi5leGFtcGxlU291cmNlID0gZXhhbXBsZVNvdXJjZTtcblx0fVxuXG5cdHJldHVybiB0cnVlO1xufSlcbkBpbmplY3QoRWxlbWVudCwgVGFyZ2V0SW5zdHJ1Y3Rpb24pXG5AY3VzdG9tRWxlbWVudCggJ2VsZW1lbnQtZXhhbXBsZScgKVxuZXhwb3J0IGNsYXNzIEVsZW1lbnRFeGFtcGxlRWxlbWVudCB7XG5cblx0QGJpbmRhYmxlIGxhbmd1YWdlID0gJ21hcmt1cCc7XG5cdEBiaW5kYWJsZSBleGFtcGxlU291cmNlO1xuXHRAYmluZGFibGUgY2FwdGlvbjtcblxuXG5cdGNvbnN0cnVjdG9yKCBlbGVtZW50LCB0YXJnZXRJbnN0cnVjdGlvbiApIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXHRcdHRoaXMubG9nZ2VyID0gTG9nTWFuYWdlci5nZXRMb2dnZXIoICdlbGVtZW50LWV4YW1wbGUnICk7XG5cdFx0dGhpcy5leGFtcGxlU291cmNlID0gdGhpcy5leHRyYWN0UmF3Q29udGVudCggdGFyZ2V0SW5zdHJ1Y3Rpb24gKTtcblx0fVxuXG5cblx0ZXh0cmFjdFJhd0NvbnRlbnQoIHRhcmdldEluc3RydWN0aW9uICkge1xuXHRcdGlmICggdGFyZ2V0SW5zdHJ1Y3Rpb24uZWxlbWVudEluc3RydWN0aW9uLmV4YW1wbGVTb3VyY2UgKSB7XG5cdFx0XHRsZXQgY29udGVudCA9IHRhcmdldEluc3RydWN0aW9uLmVsZW1lbnRJbnN0cnVjdGlvbi5leGFtcGxlU291cmNlO1xuXG5cdFx0XHRsZXQgbWF0Y2ggPSAvXlxcbihcXHMrKS8uZXhlYyggY29udGVudCApO1xuXHRcdFx0aWYgKCBtYXRjaCApIHtcblx0XHRcdFx0bGV0IGluZGVudCA9IG1hdGNoWzFdO1xuXHRcdFx0XHRsZXQgcmUgPSBuZXcgUmVnRXhwKCBgXFxuJHtpbmRlbnR9YCwgJ2cnIClcblx0XHRcdFx0Ly8gdGhpcy5sb2dnZXIuZGVidWcoIGBJbmRlbnQgaXM6ICR7aW5kZW50fWAgKTtcblx0XHRcdFx0Y29udGVudCA9IGNvbnRlbnQucmVwbGFjZSggcmUsIFwiXFxuXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0Y29udGVudCA9IGNvbnRlbnQucmVwbGFjZSggL1xcdC9nLCAnICAgICcgKS50cmltKCk7XG5cdFx0XHQvLyB0aGlzLmxvZ2dlci5kZWJ1ZyggXCJTZXQgcmF3IGNvbnRlbnQgdG86IFwiLCBjb250ZW50ICk7XG5cdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIFwiXCI7XG5cdFx0fVxuXHR9XG5cblx0YXR0YWNoZWQoKSB7XG5cdFx0bGV0IHNvdXJjZUVsID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoICcuZXhhbXBsZS1zb3VyY2UnICk7XG5cdFx0aWYgKCBzb3VyY2VFbCApIHtcblx0XHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBcIkhpZ2hsaWdodGluZyBcIiwgc291cmNlRWwsIGAgYXMgJHt0aGlzLmxhbmd1YWdlfS5gICk7XG5cdFx0XHRQcmlzbS5oaWdobGlnaHRFbGVtZW50KCBzb3VyY2VFbCApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmxvZ2dlci5lcnJvciggXCJDb3VsZG4ndCBmaW5kIHRoZSBzb3VyY2UgZWxlbWVudCBmb3JcIiwgdGhpcy5lbGVtZW50ICk7XG5cdFx0fVxuXHR9XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
