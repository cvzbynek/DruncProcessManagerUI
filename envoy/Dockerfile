FROM envoyproxy/envoy:dev-1816b675dbd3e6ae10ac01778f5b9aca6e54f71d
COPY envoy.yaml /etc/envoy/envoy.yaml
RUN chmod go+r /etc/envoy/envoy.yaml
RUN mkdir logs
RUN touch logs/custom.log
